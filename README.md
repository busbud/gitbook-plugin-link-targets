# gitbook-plugin-link-targets

Straight forward plugin that adds `target` attributes to links that contain the keys set in the config. This allows you
to have other resources live in the same subdirectory of gitbook.

__Example:__

The following will now have all links containing `subpages` to open in a new window.

```json
{
  "plugins": ["link-targets"],
  "pluginsConfig": {
    "link-targets": {
      "targets": {
        "subpages": "_blank"
      }
    }
  }
}
```
