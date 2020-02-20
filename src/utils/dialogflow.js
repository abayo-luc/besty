import axios from 'axios';
import uuid from 'uuid/v4';
import googleAuth from '../services/googleAuth';
import config from './dialogFlow.json';
const BASE_URL = 'https://dialogflow.googleapis.com/v2beta1/projects';

class DialogInstance {
	constructor() {
		this.sessionId = uuid();
	}
	async getToken() {
		let token;
		try {
			token = await googleAuth(config.client_email, config.private_key, [
				'https://www.googleapis.com/auth/cloud-platform',
				'https://www.googleapis.com/auth/dialogflow'
			]);
		} catch (error) {
			throw new Error('react-native-dialogflow: Authentication Error: ' + e);
		} finally {
			return token;
		}
	}
	async sendText(text) {
		const token = await this.getToken();
		const { data } = await axios.post(
			`${BASE_URL}/${config.project_id}/agent/sessions/${this.sessionId}:detectIntent`,
			{
				queryInput: { text: { text, languageCode: 'en' } },
				queryParams: { timeZone: 'Africa/Kigali' }
			},
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);
		return data;
	}
}

export default new DialogInstance();
