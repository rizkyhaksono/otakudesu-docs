---
sidebar_position: 1
---

# Home

The **route** is [https://otakudesube.natee.my.id/api/home](https://otakudesube.natee.my.id/api/home) to show a **home data anime** include:

- `https://otakudesube.natee.my.id/api/ongoing-anime/{page}` → Show all on going anime data.
- `https://otakudesube.natee.my.id/api/complete-anime/{page}` → Show all complete anime data.

## On Going Anime

Example data `/ongoing_anime/`:

```jsx title="https://otakudesube.natee.my.id/api/home"
{
  "data": {
    "ongoing_anime": [
      {
        "title": "Metallic Rouge",
        "slug": "metal-rouge-sub-indo",
        "poster": "https://otakudesu.media/wp-content/uploads/2024/01/Metallic-Rouge-Sub-Indo.jpg",
        "current_episode": "Episode 3",
        "release_day": "Kamis",
        "newest_release_date": "25 Jan",
        "otakudesu_url": "https://otakudesu.media/anime/metal-rouge-sub-indo/"
      },
      {
        "title": "Mahou Shoujo ni Akogarete",
        "slug": "mahou-shoujo-akogarete-sub-indo",
        "poster": "https://otakudesu.media/wp-content/uploads/2024/01/139414l.jpg",
        "current_episode": "Episode 4",
        "release_day": "Kamis",
        "newest_release_date": "25 Jan",
        "otakudesu_url": "https://otakudesu.media/anime/mahou-shoujo-akogarete-sub-indo/"
      },
    ],
  }
}
```

## Complete Anime

Example data `complete_anime`:

```jsx title="https://otakudesube.natee.my.id/api/home"
{
  "data": {
   "complete_anime": [
      {
        "title": "Dr. Stone Season 3 Part 2",
        "slug": "drstn-s3-p2-sub-indo",
        "poster": "https://otakudesu.media/wp-content/uploads/2024/01/Dr.-Stone-Season-3-Part-2-Sub-Indo.jpg",
        "episode_count": "11",
        "rating": "8.35",
        "last_release_date": "15 Jan",
        "otakudesu_url": "https://otakudesu.media/anime/drstn-s3-p2-sub-indo/"
      },
      {
        "title": "Shy",
        "slug": "shy-sub-indo",
        "poster": "https://otakudesu.media/wp-content/uploads/2024/01/Shy-Sub-Indo.jpg",
        "episode_count": "12",
        "rating": "6.75",
        "last_release_date": "15 Jan",
        "otakudesu_url": "https://otakudesu.media/anime/shy-sub-indo/"
      }
    ]
  }
}
```
