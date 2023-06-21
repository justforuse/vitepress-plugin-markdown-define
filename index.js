/**
 * Replace markdown content by custom define
 * @param md MarkdownIt instance
 * @param {object} options key-value object
 */
export default function useDefinePlugin(md, options) {
  const render = md.render
  md.render = (src, ...args) => {
    let content = src
    Object.entries(options).forEach(([key, value]) => {
      // replace key as value globally
      content = content.replace(new RegExp(key, 'g'), value)
    })
    let result = render.call(md, content, ...args)
    return result
  }
}