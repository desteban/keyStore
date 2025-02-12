import SearchIcon from '@/assets/Icons/SearchIcon';
import { Button } from '../Button/Button';
import styles from './styles.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
	children?: React.ReactNode;
	className?: string;
	id?: string;
	name?: string;
	onChange?: (value: string) => void;
	onSearchButton?: (value: string) => void;
	placeholder?: string;
}

export default function SearchInput({
	children,
	className = '',
	onChange,
	onSearchButton,
	id,
	placeholder,
	name,
}: Props) {
	const cssClass = `${styles.container} ${className}`;
	const [text, setText] = useState<string>('');

	const submit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (onSearchButton) {
			onSearchButton(text);
		}
	};

	const changeText = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.currentTarget.value);
		if (onChange) {
			onChange(text);
		}
	};

	return (
		<div className={cssClass}>
			<form className={styles.form} onSubmit={submit}>
				<input
					id={id}
					name={name}
					type="text"
					className={`${styles.input} focus:ring-0`}
					placeholder={placeholder}
					value={text}
					onChange={changeText}
					list="options"
					autoComplete="off"
				/>
				<Button type="submit" variant="none">
					<SearchIcon />
				</Button>
			</form>

			<datalist id="options">
				<option value="Windows 11 Home" />
				<option value="Windows 11 Pro" />
				<option value="Office 365" />
				<option value="AutoCad" />
				<option value="Adobe" />
			</datalist>
			<div>{children}</div>
		</div>
	);
}
