import { Suspense, type ReactNode } from 'react';

import { ErrorBoundary } from 'react-error-boundary';

interface SafeSuspenseProps {
  children: ReactNode;
}

const SafeSuspense: React.FC<SafeSuspenseProps> = ({ children }) => {
  return (
    <ErrorBoundary
      fallback={<div>エラーが発生しました。ページをリロードしてください。</div>}
    >
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default SafeSuspense;
