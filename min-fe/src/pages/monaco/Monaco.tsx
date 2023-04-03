import './monaco.css'
import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';

function Component() {
  const editorRef = useRef(null)
  let editor:any = null

  useEffect(() => {
		if (editorRef.current) {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			editor = monaco.editor.create(editorRef.current, {
      minimap: { enabled: false },
      fontSize: 14,
      value: '',
      lineNumbersMinChars: 7,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      wordBasedSuggestions: false,
      quickSuggestions: false,
    });
		}
		return () => {
			editor.dispose();
		};
  }, []);
  
  return <div className='monaco'>
    <h2>Monaco</h2>
    <div className='editor' ref={editorRef}></div>
    </div>
}

export default Component


