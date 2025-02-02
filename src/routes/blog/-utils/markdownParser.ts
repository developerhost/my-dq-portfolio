import MarkdownIt from 'markdown-it';

// 必要に応じてオプションを設定
// 例: HTML タグを解釈したい場合は { html: true } を指定
const md = new MarkdownIt({
  html: true,
  breaks: false,
  linkify: true,
  // 他にも細かいオプションあり
});

export const parseMarkdown = (markdown: string) => {
  return md.render(markdown);
};
