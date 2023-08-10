import Quill from 'quill';

const Inline = Quill.import('blots/inline');

class CodeSnippetBlot extends Inline {
  static create(value) {
    const node = super.create();
    node.textContent = value;
    node.setAttribute('class', 'code-snippet');
    return node;
  }

  static formats(node) {
    return node.textContent;
  }
}
CodeSnippetBlot.blotName = 'code-snippet';
CodeSnippetBlot.tagName = 'code';

Quill.register(CodeSnippetBlot);

const CodeSnippetModule = {
  syntax: true, // Include a syntax option if needed
  blotName: 'code-snippet',
  tagName: 'code',
};

export default CodeSnippetModule;
