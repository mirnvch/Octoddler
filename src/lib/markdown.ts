export function markdownToHtml(markdown: string): string {
	let html = markdown

	// Headers
	html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
	html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
	html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

	// Blockquotes
	html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')

	// Bold
	html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

	// Italic
	html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')

	// Links — sanitize href to prevent javascript: protocol XSS
	html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match: string, text: string, href: string) => {
		const sanitizedHref = href.trim()
		if (/^javascript:/i.test(sanitizedHref) || /^data:/i.test(sanitizedHref)) {
			return text
		}
		const isExternal = /^https?:\/\//.test(sanitizedHref)
		const relAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
		return `<a href="${sanitizedHref}"${relAttr}>${text}</a>`
	})

	// Line breaks
	html = html.replace(/\n\n/g, '</p><p>')

	// Lists - unordered
	const ulBlocks: string[] = []
	html = html.replace(/(?:^|\n)((?:^- .+$\n?)+)/gm, (match, list) => {
		const placeholder = `__UL_${ulBlocks.length}__`
		const items = list
			.trim()
			.split('\n')
			.map((line: string) => line.replace(/^- /, ''))
			.map((item: string) => `<li>${item}</li>`)
			.join('')
		ulBlocks.push(`<ul>${items}</ul>`)
		return `\n${placeholder}\n`
	})

	// Lists - ordered
	const olBlocks: string[] = []
	html = html.replace(/(?:^|\n)((?:^\d+\. .+$\n?)+)/gm, (match, list) => {
		const placeholder = `__OL_${olBlocks.length}__`
		const items = list
			.trim()
			.split('\n')
			.map((line: string) => line.replace(/^\d+\. /, ''))
			.map((item: string) => `<li>${item}</li>`)
			.join('')
		olBlocks.push(`<ol>${items}</ol>`)
		return `\n${placeholder}\n`
	})

	// Wrap in paragraphs
	html = `<p>${html}</p>`

	// Restore lists
	ulBlocks.forEach((block, i) => {
		html = html.replace(`__UL_${i}__`, block)
	})
	olBlocks.forEach((block, i) => {
		html = html.replace(`__OL_${i}__`, block)
	})

	// Clean up empty paragraphs and fix nesting
	html = html.replace(/<p><\/p>/g, '')
	html = html.replace(/<p>(<h[1-3]>)/g, '$1')
	html = html.replace(/(<\/h[1-3]>)<\/p>/g, '$1')
	html = html.replace(/<p>(<ul>)/g, '$1')
	html = html.replace(/(<\/ul>)<\/p>/g, '$1')
	html = html.replace(/<p>(<ol>)/g, '$1')
	html = html.replace(/(<\/ol>)<\/p>/g, '$1')
	html = html.replace(/<p>(<blockquote>)/g, '$1')
	html = html.replace(/(<\/blockquote>)<\/p>/g, '$1')

	return html
}
