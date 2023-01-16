import { formatDistance, format } from "date-fns";
import type { FunctionalComponent } from "preact";
import ReactMarkdown from "preact-markdown";

interface SingleBlogProps {
  post: any;
}

const SingleBlog: FunctionalComponent<SingleBlogProps> = ({ post }) => {
  const {
    title,
    content,
    featuredImage,
    createdAt,
    updatedAt,
    readingTime,
    author,
  } = post.attributes || {};

  console.log(post);

  return (
    <>
      <div className="my-4 text-center">
        <h1 className="text-center text-4xl leading-tight text-gray-900 my-4 font-bold">
          {title}
        </h1>
        <div className="text-gray-500 flex justify-center items-center space-x-2">
          <span className="flex space-x-2 items-center overflow-hidden">
            <img
              class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src={
                author?.bioImage?.url
                  ? `http://localhost:1337${author?.bioImage?.url}`
                  : "https://via.placeholder.com/1080"
              }
              alt="author picture"
            />
            <p className="font-medium text-xs text-gray-600 cursor-pointer">
              {author?.name}
            </p>
          </span>
          <span>&middot;</span>
          <span>{format(new Date(createdAt), "MM/dd/yyyy")}</span>
          <span>&middot;</span>
          <span>{readingTime}</span>
        </div>
      </div>
      <div className="rounded-md h-56 w-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={
            featuredImage && featuredImage.data
              ? `http://localhost:1337${featuredImage.data.attributes.url}`
              : "https://via.placeholder.com/1080"
          }
        />
      </div>
      <article className="prose  max-w-full w-full my-4">
        <p>{content}</p>
        {/* <ReactMarkdown
        components={{
          img: (props: any) => {
            const copyProps = { ...props };
            if (!props?.src.includes("http")) {
              copyProps.src = `http://localhost:1337${props?.src}`;
            }
            return <img {...copyProps} />;
          },
        }}
        />
          {content}
        </ReactMarkdown> */}
      </article>
    </>
  );
};

export default SingleBlog;
