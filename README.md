# Red/Blue Lens

A tiny web app that reveals **hidden drawings and messages** using the red/blue colour-filter trick.

Two images (or two sentences) are drawn on top of each other, one in **blue ink** and one in **red ink**. To the naked eye they are a tangled mess. Look through a **red filter** and the red ink disappears, leaving only the blue image. Look through a **blue/cyan filter** and the blue ink disappears, leaving only the red one.

This project does the same thing digitally: it opens your phone camera and applies a virtual red or blue filter, so you can read the puzzles without any physical glasses. It also includes a puzzle generator so you can make your own and print them.

![Hard puzzle: normal view, red filter, blue filter](docs/hard-strip.png)

*Left: what you see on paper. Middle: through the red filter (only the blue drawing survives). Right: through the blue filter (only the red drawing survives).*

![Easy puzzle: normal view, red filter, blue filter](docs/easy-strip.png)

## How it works

The filter is just a per-pixel channel pick, with a contrast boost:

| Filter | Channel used as brightness | Red ink looks | Blue ink looks |
|--------|----------------------------|---------------|----------------|
| Red    | R                          | white (hidden) | dark (visible) |
| Blue   | B                          | dark (visible) | white (hidden) |

White paper is bright in every channel, so it stays bright. Pure red `#ff0000` has full R and no B, and pure blue `#0000ff` is the opposite. That is the whole trick.

When generating puzzles, both layers are drawn with the canvas `multiply` blend mode. Where they overlap the pixel turns black, which is dark in *both* views, so each hidden image stays complete.

## Features

- **Camera mode**: live camera with *Normal / Red filter / Blue filter*, a contrast slider and front/back camera switch.
- **Photo mode**: pick an image (on phones this can also open the camera) and flip between filters.
- **Text puzzles**: type two sentences, they are auto-wrapped to fill the canvas with the largest possible font, then overlaid in blue and red.
- **Shape puzzles**: pick two of 12 shapes. Difficulty levels add random scribbles, rotation and offsets so the shapes are hard to make out by eye. The hidden shape is drawn with a thicker stroke than the noise so it stands out under the filter.
- **Preview** of the normal, red-filtered and blue-filtered result before you print.
- **PNG export** for printing.
- Single static HTML file, no build step, no dependencies. The UI is in Arabic (RTL), and the puzzle text can be in any language.

## Run it

The camera API needs a secure context (`https://` or `localhost`).

On your computer:

```bash
cd app
python3 -m http.server 8000
# open http://localhost:8000
```

To try it on your phone, serve it over HTTPS on your local network (for example with a self-signed certificate, or a tunnelling tool), or deploy the `app/` folder to any static host such as Netlify Drop, GitHub Pages or Cloudflare Pages. Without HTTPS the live camera is blocked by the browser, but you can still use the photo button to load a picture of a puzzle.

## Real-world use (no app needed)

You can do this with physical filters too:

- Red/cyan 3D glasses (close one eye and look through the other lens)
- Red and blue/cyan cellophane or transparent plastic sheets
- Draw one picture with a blue pen and another with a red pen on the same paper

Print puzzles in saturated, pure red and blue. Duller inks reduce how well each filter separates the two layers, so test one page first.

## Project layout

```
app/index.html   the whole application (HTML + CSS + JS)
docs/            example puzzles and filtered views used in this README
```

## License

MIT
