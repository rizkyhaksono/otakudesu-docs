---
sidebar_position: 7
---

# Anime By Genre

The **route** is [https://otakudesube.natee.my.id/api/genre/fantasy?page=1](https://otakudesube.natee.my.id/api/genre/fantasy?page=1) to show a **anime data by genre** include:

- `https://otakudesube.natee.my.id/api/genre/{slug}?page={page}` → Show all anime data by genre.

## Anime by Genre

Example data `/genre/{slug}?page={page}`

```jsx title="https://otakudesube.natee.my.id/api/genre/fantasy?page=1"
{
    "data": {
        "anime": [
            {
                "title": "One Piece",
                "slug": "op-sub-indo",
                "poster": "https://otakudesu.cloud/wp-content/uploads/2021/05/One-Piece-Sub-Indo.jpg",
                "rating": "8.54",
                "episode_count": "?",
                "season": "Fall 1999",
                "studio": "Toei Animation",
                "genres": [
                    {
                        "name": "Action",
                        "slug": "action",
                        "otakudesu_url": "https://otakudesu.cloudhttps://otakudesu.cloud/genres/action/"
                    },
                    {
                        "name": "Adventure",
                        "slug": "adventure",
                        "otakudesu_url": "https://otakudesu.cloudhttps://otakudesu.cloud/genres/adventure/"
                    },
                    {
                        "name": "Comedy",
                        "slug": "comedy",
                        "otakudesu_url": "https://otakudesu.cloudhttps://otakudesu.cloud/genres/comedy/"
                    },
                    {
                        "name": "Drama",
                        "slug": "drama",
                        "otakudesu_url": "https://otakudesu.cloudhttps://otakudesu.cloud/genres/drama/"
                    },
                    {
                        "name": "Fantasy",
                        "slug": "fantasy",
                        "otakudesu_url": "https://otakudesu.cloudhttps://otakudesu.cloud/genres/fantasy/"
                    },
                    {
                        "name": "Shounen",
                        "slug": "shounen",
                        "otakudesu_url": "https://otakudesu.cloudhttps://otakudesu.cloud/genres/shounen/"
                    },
                    {
                        "name": "Super Power",
                        "slug": "super-power",
                        "otakudesu_url": "https://otakudesu.cloudhttps://otakudesu.cloud/genres/super-power/"
                    }
                ],
                "synopsis": "Dulu, ada seorang bajak laut terkenal di seluruh lautan bernama Gol D. Roger. Ia merupakan seorang raja bajak laut yang telah berlayar mengarungi seluruh Grand Line, sayangnya ia ditangkap pemerintah dan telah dieksekusi mati. Sesaat sebelum kematiannya, Ia mengumumkan kepada dunia bahwa dirinya menyimpan sebuah harta karun bernama One Piece, sebuah harta karun yang kini menjadi incaran seluruh bajak laut yang ada di dunia.Di Era Bajak Laut saat ini, ada seorang remaja bernama Monkey D. Luffy yang memiliki cita-cita untuk menjadi seorang Raja Bajak Laut. Namun Luffy sadar bahwa ia tidak bisa melakukannya sendiri, sembari dalam perjalanan ia juga mencari kru dan bertemu dengan teman-temannya yang baru. Berbeda dengan bajak laut lain yang ganas dan jahat, Luffy bersama teman-temannya berlayar murni atas dasar petualangan serta mencari tempat tempat baru yang akan muncul di hadapan mereka.Di perjalanan inilah cerita mereka dimulai, mampukan Luffy bersama teman-temannya mencapai impian mereka?(Info: Episode sebelumnya akan ditambahkan secara berkala)",
                "otakudesu_url": "https://otakudesu.cloud/anime/op-sub-indo/"
            },
        ],
        "pagination": {
            "current_page": 1,
            "last_visible_page": 32,
            "has_next_page": true,
            "next_page": 2,
            "has_previous_page": false,
            "previous_page": null
        }
    }
}
```
