import ReactMarkdown from "react-markdown";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div className="px-8 py-10 text-theme-text">
      {/* <div className="pb-5">
        <p><strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.</p>
      </div>

      <div>
        <a className="inline underline text-theme-blue" href="#">Dynamic typing</a>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </div>

      <div className="p-4 my-6 bg-theme-post">
        <pre className="text-theme-text">
          <code>
            <span className="text-theme-span">let </span>
            foo = <span className="text-green-500">42</span>;
            <span className="text-theme-label">   // foo is now a number</span><br />
            foo = <span className="text-green-500">'bar'</span>;
            <span className="text-theme-label">    // foo is now a string</span><br />
            foo = <span className="text-green-500">true</span>;
            <span className="text-theme-label">     // foo is now a boolean</span>
          </code>
        </pre>
      </div> */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}