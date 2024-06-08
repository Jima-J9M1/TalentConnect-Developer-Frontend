module.exports = {
    // Type check TypeScript files
    '**/*.(ts|tsx)': () => 'npm tsc --noEmit',

    // Lint & Prettify TS and JS files
    '**/*.(ts|tsx|js)': (filenames) => [
        `npm eslint ${filenames.join(' ')}`,
        `npm prettier --write ${filenames.join(' ')}`
    ],

    // Prettify only Markdown and JSON files
    '**/*.(md|json)': (filenames) =>
        `npm prettier --write ${filenames.join(' ')}`
};
