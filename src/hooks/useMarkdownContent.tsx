import { useEffect, useState } from 'react';

const useMarkdownContent = (filePath: string) => {
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(filePath)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.text();
            })
            .then((text) => setContent(text))
            .catch((error) => setError(error.message));
    }, [filePath]);

    return { content, error };
};

export default useMarkdownContent;