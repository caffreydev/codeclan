import { openAuth, changePage } from './auth-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/Store';

export function loginPageAction() {
	const dispatch = useDispatch<AppDispatch>();
	return () => {
		dispatch(openAuth);
		dispatch(changePage('login'));
	};
}
