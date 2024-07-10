'use client'
import React, { useRef, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { useTheme } from "next-themes";
const MonacoEditor = ({ initialCode, language }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(initialCode);
    }
  }, [initialCode]);
  const { theme } = useTheme();
  const [editorTheme, setEditorTheme] = useState("vs-light");
  
  useEffect(() => {
    if (theme === "dark") {
      setEditorTheme("vs-dark");
    } else {
      setEditorTheme("vs-light");
    }
  }, [theme]);
  return (
    <Editor
      height="100vh"
      defaultLanguage={language}
      defaultValue={initialCode}
      theme={editorTheme}
      onMount={(editor) => {
        editorRef.current = editor;
      }}
    />
  );
};

export default MonacoEditor;
