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

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Model from '@ckeditor/ckeditor5-ui/src/model';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import { addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';



class Editor extends BalloonEditor {}

class FontColorPicker extends Plugin {
    init() {
        const editor = this.editor;

        // The button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add( 'fontColorPicker', () => {
            // The button will be an instance of ButtonView.
			const dropdown = createDropdown();

            // Configure dropdown's button properties:
			dropdown.buttonView.set( {
				label: 'Font Color',
				withText: true
			} );

			dropdown.panelView.class = "font-color-container"
			

			dropdown.render();

			dropdown.buttonView.on( 'execute', () => {

				window.dispatchEvent(new CustomEvent('colorpicker', { bubbles: true, detail: { text: 'test' } }))

				setTimeout(()=>{
					dropdown.panelView.element.appendChild(document.querySelector( '#font-color-selector' ));
				},1000);
            } );
			
			return dropdown;
        } );
    }
}

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
	Underline,
	Plugin,
	FontColorPicker
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontSize',
			'fontColor',
			'fontColorPicker',
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
	}
};

export default Editor;
