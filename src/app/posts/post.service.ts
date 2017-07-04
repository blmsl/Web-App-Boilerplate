export class PostService {
    
    getTweets() : any[] {
        return [
            {
                user: "Andreas",
                handle: "@aantonop",
                body: `Needs repeating
                Users: If you hold bitcoin and there is a HF, you will now own bitcoin on both forks.
                You don't need to do anything.`,
                imageUrl: "https://pbs.twimg.com/profile_images/570063561603289088/CfuQCX0Y_bigger.png",
                likes: 248
            },
            {
                user: "Edward Snowden",
                handle: "@Snowden",
                body: `
                The bomb dropped today in the middle of nowhere, Afghanistan, cost $314,000,000.
                `,
                imageUrl: "http://www.judiciaryreport.com/images_4/edward-snowden-9-29-15-1.jpg",
                likes: 15000
            },
            {
                user: "freeCodeCamp",
                handle: "@freeCodeCamp",
                body: `
                You can now embed into our forum runnable, editable code in all major programming languages.
                `,
                imageUrl: "https://avatars2.githubusercontent.com/u/9892522?v=3&s=400",
                likes: 25
            }
        ]
    }
}