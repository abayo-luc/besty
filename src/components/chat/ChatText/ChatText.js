import React, { forwardRef, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Paragraph, Card, useTheme, Avatar } from 'react-native-paper';
import { Transitioning, Transition } from 'react-native-reanimated';
import BotIcon from './icons/robot.png';
import styles from './styles';
import { responsiveHeight } from '../../../utils/responsivePixel';
const ChatText = (props, ref) => {
	const { colors } = useTheme();
	const transition = (
		<Transition.In
			type={props.nodeId ? 'slide-right' : 'slide-left'}
			durationMs={400}
			interpolation='linear'
			propagation={props.nodeId ? 'right' : 'left'}
		/>
	);
	useEffect(() => {
		if (props.animated) {
			ref.current.animateNextTransition();
		}
	}, [props.message, props.animated]);
	const containerStyles = [styles.container];
	const cardStyles = [styles.card, { backgroundColor: colors.secondary }];
	const textStyles = [];
	if (props.nodeId) {
		containerStyles.push({
			justifyContent: 'flex-end'
		});
		cardStyles.push({
			backgroundColor: colors.accent,
			borderBottomEndRadius: 0
		});
		textStyles.push({ color: '#fff' });
	}

	return (
		<Transitioning.View
			style={containerStyles}
			ref={ref}
			transition={transition}>
			{!props.nodeId ? (
				<Avatar.Image
					source={BotIcon}
					size={responsiveHeight(5)}
					style={styles.avatar}
				/>
			) : null}
			<Card style={cardStyles} elevation={1}>
				<Paragraph style={textStyles}>{props.message}</Paragraph>
			</Card>
		</Transitioning.View>
	);
};

export default forwardRef(ChatText);
