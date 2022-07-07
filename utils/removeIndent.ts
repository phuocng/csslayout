export function removeIndent(str: TemplateStringsArray) {
    const lines = str[0].split('\n')

    const cleanLines: String[] = lines
        .map((line) => {
            if (line !== '\n') {
                return line
            }
        })
        .filter(Boolean)

    const lens = cleanLines.map((l) => l.match(/ */)[0].length)
    const minLen = Math.min(...lens) + 4
    return '\n' + cleanLines.map((l) => l.substring(minLen)).join('\n') + '\n'
}
