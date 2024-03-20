---
sidebar_position: 4
---

# On Going Anime

The **route** is [https://otakudesube.natee.my.id/api/ongoing-anime/1](https://otakudesube.natee.my.id/api/ongoing-anime/1) to show a **on going anime** include:

- `https://otakudesube.natee.my.id/api/ongoing-anime/{page}` → On going anime.

## On Going Anime Data

Example data `ongoing-anime/{page}`

```jsx title="https://otakudesube.natee.my.id/api/ongoing-anime/1"
{
    "data": {
        "paginationData": {
            "current_page": 1,
            "last_visible_page": 3,
            "has_next_page": true,
            "next_page": 2,
            "has_previous_page": false,
            "previous_page": null
        },
        "ongoingAnimeData": [
            {
                "title": "Akuyaku Reijou Level 99",
                "slug": "akuyaku-reijou-lv-99-sub-indo",
                "poster": "https://otakudesu.cloud/wp-content/uploads/2024/01/Akuyaku-Reijou-Level-99.jpg",
                "current_episode": "Episode 11",
                "release_day": "Rabu",
                "newest_release_date": "20 Mar",
                "otakudesu_url": "https://otakudesu.cloud/anime/akuyaku-reijou-lv-99-sub-indo/"
            },
            {
                "title": "Shaman King: Flowers",
                "slug": "shaman-king-flowers-sub-indo",
                "poster": "https://otakudesu.cloud/wp-content/uploads/2024/01/Shaman-King-Flowers-Sub-Indo.jpg",
                "current_episode": "Episode 11",
                "release_day": "Rabu",
                "newest_release_date": "20 Mar",
                "otakudesu_url": "https://otakudesu.cloud/anime/shaman-king-flowers-sub-indo/"
            }
        ]
    }
}
```
