// @ts-check
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';

// https://astro.build/config
export default defineConfig({
  site: 'https://aidyak.github.io',
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, 'element', (node) => {
          if (node.tagName === 'h1') node.properties.className = ['ab-text-headline-l'];
          if (node.tagName === 'h2') node.properties.className = ['ab-text-headline-m'];
          if (node.tagName === 'h3') node.properties.className = ['ab-text-headline-s'];
          if (node.tagName === 'p') node.properties.className = ['ab-text-body-m'];
        });
      }
    ]
  }
});
