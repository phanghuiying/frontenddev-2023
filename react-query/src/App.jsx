import { useState, useEffect, useMemo, useCallback } from "react";
// import TodoList from "./components/TodoList";
import { lazy, Suspense } from 'react';
import { useQueryErrorResetBoundary } from "react-query";
import RefreshButton from './components/RefreshButton';
import { ErrorBoundary } from "react-error-boundary";
import { Circles, RotatingSquare } from 'react-loader-spinner';

const TodoList = lazy(() => import('./components/TodoList'));

// loading component
const Loading = () => {
  return (
    <RotatingSquare
      height="100"
      width="100"
      color="#46504B"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{position: 'fixed', top: '50%', left: '50%'}}
      visible={true}
      
    />
  );
};

// a component to be shown when there's an error
// resetErrorBoundary is a function that's passed from ErrorBoundary component
const ErrorFallback = ({error, resetErrorBoundary}) => {
  <div>
    <h1>An error has occured</h1>
    <RefreshButton onClick={resetErrorBoundary}>Try again</RefreshButton>
    <pre style={{ whiteSpace: "normal"}}>{error.message}</pre>
  </div>
};


function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    // <TodoList />
    <ErrorBoundary onReset={reset} fallbackRender={ErrorFallback}>
      <Suspense fallback={<Loading/>}>
        <TodoList />
      </Suspense>
    </ErrorBoundary>
  )
}

export default App;
