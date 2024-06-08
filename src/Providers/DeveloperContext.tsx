// this is the context file that will be used to store the user Developer data

import { createContext, useContext, useState } from 'react';

export const DeveloperContext = createContext<{
    developer: any;
    setDeveloper: any;
    isOwner: boolean;
    setIsOwner: any;
    isLoading: boolean;
    isError: boolean;
    error: any;
    setIsLoading: any;
    setIsError: any;
    setError: any;
    isView: boolean;
    setIsView: any;
}>({
    developer: null,
    setDeveloper: () => {},
    isOwner: false,
    setIsOwner: () => {},
    isLoading: false,
    isError: false,
    error: null,
    setIsLoading: () => {},
    setIsError: () => {},
    setError: () => {},
    isView: false,
    setIsView: () => {}
});

export const useDeveloper = () => {
    const context = useContext(DeveloperContext);
    if (!context) {
        throw new Error('useDeveloper must be used within a DeveloperProvider');
    }
    return context;
};

export const DeveloperProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [developer, setDeveloper] = useState<any>(null);
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [isView, setIsView] = useState<boolean>(false);

    return (
        <DeveloperContext.Provider
            value={{
                developer,
                setDeveloper,
                isOwner,
                setIsOwner,
                isLoading,
                isError,
                error,
                setIsLoading,
                setIsError,
                setError,
                isView,
                setIsView
            }}
        >
            {children}
        </DeveloperContext.Provider>
    );
};
