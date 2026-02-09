const handleResponse = async (response: Response): Promise<string> => {
    if (!response.ok) {
        const detail = await response.text();
        const reason = detail || response.statusText;
        return `AI service error (${response.status}): ${reason}`;
    }

    const payload = await response.json();
    if (typeof payload.message !== "string") {
        return "Unexpected response from AI service.";
    }

    return payload.message;
};

export const generateResponse = async (
    prompt: string,
    contextData: string
): Promise<string> => {
    try {
        const response = await fetch("/api/ai/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt, context: contextData }),
        });

        return handleResponse(response);
    } catch (error) {
        console.error("AI service network error:", error);
        return "I encountered an error processing your request. Please check your connection.";
    }
};