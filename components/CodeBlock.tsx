export function CodeBlock({ 
    code, 
    language = 'javascript' 
  }: { 
    code: string, 
    language?: string 
  }) {
    return (
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
    );
  }