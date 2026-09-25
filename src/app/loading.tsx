const LoadingPage = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-gray-900/50 backdrop-blur-sm">
            <div className="relative flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-accent"></span>
                <span className="absolute loading loading-ring loading-lg text-primary opacity-60"></span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <p className="text-3xl font-medium text-gray-200/80">
                    Loading your Fitlog
                </p>
                <p className="text-xl text-gray-200/50">
                    Just a moment, please...
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;