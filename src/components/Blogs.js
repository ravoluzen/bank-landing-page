import coverOne from '../images/image-currency.jpg'
import coverTwo from '../images/image-restaurant.jpg'
import coverThree from '../images/image-plane.jpg'
import coverFour from '../images/image-confetti.jpg'

const Blogs = () => {

    const blogContent = [
        {
            "cover":coverOne,
            "author":"By Claire Robinson",
            "title":"Receive money in any currency with no fees",
            "content":"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
        },
        {
            "cover":coverTwo,
            "author":"By Wilson Hutton",
            "title":"Treat yourself without worrying about money",
            "content":"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        },
        {
            "cover":coverThree,
            "author":"By Wilson Hutton",
            "title":"Take your Easybank card wherever you go",
            "content":"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        },
        {
            "cover":coverFour,
            "author":"By Claire Robinson",
            "title":"Our invite-only Beta accounts are now live!",
            "content":"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },
    ]
  return (
    <div id="blogs" className='w-full h-auto mb-4 p-4 text-slate-700 lg:p-32'>

        <h1 className='mb-4 text-2xl font-bold text-slate-900 lg:text-left'>Latest Articles</h1>

        <main className='grid grid-cols-1 g-4 justify-between md:grid-cols-2 lg:grid-cols-4'>

            {blogContent.map((article) => (

                <article key={article.title} className='mb-12 p-4 flex flex-col text-left text-slate-700 rounded shadow object-cover'>
                    <img src={article.cover} alt='cover' className='mb-4 object-cover'></img>
                    <p className='mb-4 text-sm text-slate-900'>{article.author}</p>
                    <h2 className='mb-4 text-2xl font-bold lg:text-xl'>{article.title}</h2>
                    <p className='text-md'>{article.content}</p>

                </article>
            ))}
        </main>
    </div>
  )
}

export default Blogs