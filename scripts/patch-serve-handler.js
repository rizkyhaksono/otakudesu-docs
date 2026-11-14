const fs = require('fs');
const path = require('path');

// serve-handler calls require('minimatch') as a function. minimatch 11 exports
// that function as a named export. Keep the old callable form working too.
const file = path.join(__dirname, '..', 'node_modules', 'serve-handler', 'src', 'index.js');
if (!fs.existsSync(file)) {
  process.exit(0);
}

const source = fs.readFileSync(file, 'utf8');
const needle = "const minimatch = require('minimatch');";
const replacement = [
  "const minimatchExport = require('minimatch');",
  "const minimatch = typeof minimatchExport === 'function' ? minimatchExport : minimatchExport.minimatch;",
].join('\n');

if (source.includes(needle)) {
  fs.writeFileSync(file, source.replace(needle, replacement));
}
