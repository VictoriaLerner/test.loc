import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
export default function edit() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const blockProps = useBlockProps();

	return <p {...blockProps}>Edit 555 </p>;
}
