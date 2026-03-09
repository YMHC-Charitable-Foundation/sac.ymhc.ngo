import { visit } from 'unist-util-visit';

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, 'image', (node) => {
      // Check if the image url points to YouTube
      if (node.url && (node.url.includes('youtube.com/') || node.url.includes('youtu.be/'))) {
        let videoId = null;
        if (node.url.includes('youtu.be/')) {
          videoId = node.url.split('youtu.be/')[1].split('?')[0];
        } else if (node.url.includes('youtube.com/watch')) {
          try {
            videoId = new URL(node.url).searchParams.get('v');
          } catch(e) {}
        }

        if (videoId) {
          // Mutate the image node into an MDX JSX element representing an iframe
          node.type = 'mdxJsxTextElement';
          node.name = 'iframe';
          node.attributes = [
            { type: 'mdxJsxAttribute', name: 'width', value: '100%' },
            { type: 'mdxJsxAttribute', name: 'height', value: '500' },
            { type: 'mdxJsxAttribute', name: 'src', value: `https://www.youtube.com/embed/${videoId}` },
            { type: 'mdxJsxAttribute', name: 'title', value: 'YouTube video player' },
            { type: 'mdxJsxAttribute', name: 'frameBorder', value: '0' },
            { type: 'mdxJsxAttribute', name: 'allow', value: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' },
            { type: 'mdxJsxAttribute', name: 'allowFullScreen', value: null }
          ];
          node.children = [];
          
          // Optionally remove url/alt/title specific to images
          delete node.url;
          delete node.title;
          delete node.alt;
        }
      }
    });
  };
  return transformer;
};

export default plugin;
