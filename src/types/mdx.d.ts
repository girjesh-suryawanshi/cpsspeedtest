declare module '*.mdx' {
  import type { ComponentType } from 'react';
  export const frontmatter: {
    title: string;
    description: string;
    [key: string]: any;
  };
  const Component: ComponentType;
  export default Component;
}
