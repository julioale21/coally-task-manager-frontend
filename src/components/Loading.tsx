// components/Loading.tsx
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Círculo exterior */}
        <div className="w-12 h-12 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin"></div>
        {/* Círculo interior */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 rounded-full border-4 border-blue-400/20 border-t-blue-400 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export { Loading };
