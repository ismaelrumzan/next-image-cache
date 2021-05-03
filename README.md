# How to reproduce

- Open the following URL
```
https://next-image-cache.vercel.app/
```

You will see this image

![first image](https://raw.githubusercontent.com/ralomach/next-image-cache/main/public/first.png)

Although I already changed it on the source to be this one:

![second image](https://raw.githubusercontent.com/ralomach/next-image-cache/main/public/second.png)

As you can see visiting the URL on the index page's getStaticProps function :

[https://www.omnycontent.com/d/clips/f895e4af-2068-409d-a7a7-aa9201219358/7b085e6d-da03-47aa-9505-ab18012c208d/e0587960-22f2-4242-89ce-ab21013ef5f3/image.jpg](https://www.omnycontent.com/d/clips/f895e4af-2068-409d-a7a7-aa9201219358/7b085e6d-da03-47aa-9505-ab18012c208d/e0587960-22f2-4242-89ce-ab21013ef5f3/image.jpg)

Even after:
- Setting revalidate to 60 seconds
- New deploys

On dev environment, the same occurs.

```
yarn dev
```

Open the url

```
http://localhost:3000
```

You will see the second image, and it will be cached

```
.next/cache/images
```

Please let me know to remove the second image from the source and you will only see the first one if you manually remove the images cache folder.