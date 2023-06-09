import { type RouterOutputs } from "y/utils/api";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostViewUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostViewUser) => {
  const { post, author } = props;

  return (
    <div key={post.id} className="flex gap-4 border-b border-slate-400 p-4 ">
      <Image
        src={author.profilePicture}
        alt="Profile image"
        className="h-14 w-14 rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-400">
          <Link href={`/@${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}`}>
            {" "}
            <span className="font-thin">{`· ${dayjs(
              post.createdAt
            ).fromNow()}`}</span>
          </Link>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};
