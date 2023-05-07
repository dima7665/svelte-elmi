import { dictionary } from '../../../services/i18n';
import { get } from 'svelte/store';

export const getRoleI18n = (locale: string): { [p: string]: string } => {
	const dir = get(dictionary)[locale]['landing-start'] as { role: { [p: string]: string } };

	return dir.role;
};
