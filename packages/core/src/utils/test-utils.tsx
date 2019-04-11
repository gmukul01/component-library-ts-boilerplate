import { defaultTheme } from '@react-components/theme';
import { ThemeProvider } from '@styled';
import React from 'react';
import { render, RenderResult } from 'react-testing-library';

const AllTheProviders: React.FunctionComponent = props => (
    <ThemeProvider theme={defaultTheme}>
        <>{props.children}</>
    </ThemeProvider>
);

const customRender = (ui: React.ReactElement<any>, options?: object): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render };
