# averymoon.co — V6.12.9 Selected Projects Hero Rebuild

Built on V6.12.8.

This fixes the Selected Projects hero structurally rather than adding another positioning override.

Changes:
- Replaces the old `.selected-intro` block with an explicit two-column editorial grid.
- Keeps the supporting statement directly under the headline on the left.
- Places the proprietary-materials note in the right column and bottom-aligns it with the left content.
- Removes absolute positioning, viewport-based `top` values, transforms, and inherited margin hacks from this hero.
- Reduces hero dead space and pulls the following project section upward.
- Preserves the approved Option E Open Graph image and every other portfolio page unchanged.
