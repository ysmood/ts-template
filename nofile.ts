import kit from "nokit";

export default task => {
    task('default dev', () => kit.spawn('tsc', ['-w']))

    task('build')

    task("test", () => kit.spawn("junit", ["test/index.js"]));
};