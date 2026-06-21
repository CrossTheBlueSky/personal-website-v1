import { execSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.resolve(root, 'dist');
const modernDistDir = path.resolve(root, '..', 'modern', 'dist');
const profileSource = path.resolve(root, '..', 'modern', 'public', 'new_site_photo.png');
const faviconSource = path.resolve(root, '..', 'modern', 'public', 'bc_favicon.png');
const resumePdfSource = path.resolve(root, '..', 'modern', 'public', 'resume.pdf');

mkdirSync(distDir, { recursive: true });

execSync('npx resumx resume.md -f html -o dist/ --css site.css', {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, RESUMX_TELEMETRY: '0' },
});

const builtHtmlPath = path.join(distDir, 'resume.html');
let html = readFileSync(builtHtmlPath, 'utf8');

html = html.replace(
  /<header>/,
  '<header class="site-header"><div class="header-main">',
);
html = html.replace(
  /<\/header>/,
  '</div><img class="profile-photo" src="/modern/profile.png" alt="Derek Mercedes" width="120" height="120" /></header>',
);
html = html.replace(
  '<title>resume</title>',
  '<title>Derek Mercedes — Full-Stack Software Engineer</title>',
);
html = html.replace(
  '</head>',
  '  <link rel="icon" type="image/png" href="/modern/bc_favicon.png" />\n</head>',
);

const indexPath = path.join(distDir, 'index.html');
writeFileSync(indexPath, html);

mkdirSync(modernDistDir, { recursive: true });
writeFileSync(path.join(modernDistDir, 'index.html'), html);
copyFileSync(profileSource, path.join(modernDistDir, 'profile.png'));
copyFileSync(faviconSource, path.join(modernDistDir, 'bc_favicon.png'));
copyFileSync(resumePdfSource, path.join(modernDistDir, 'resume.pdf'));

console.log('Built modern site from rmx-resume → modern/dist/');
