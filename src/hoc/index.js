import SectionWrapper from "./SectionWrapper";
import ErrorBoundary from "../components/ErrorBoundary";
import WebGLWrapper from "./WebGLWrapper";

// Configure React Router future flags
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';
if (NavigationContext) {
  NavigationContext.future = {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  };
}

export { SectionWrapper, ErrorBoundary, WebGLWrapper };
