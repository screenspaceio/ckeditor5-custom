/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

class Editor extends BalloonEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	BlockQuote,
	Bold,
	Essentials,
	FontColor,
	FontSize,
	Heading,
	Italic,
	Link,
	List,
	Paragraph,
	Underline
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontColor',
			'|',
			'bold',
			'italic',
			'underline',
			'link',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'alignment',
			'blockQuote'
		]
	},
	language: 'en'
};

export default Editor;
