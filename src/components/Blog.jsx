import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Blog = ({ blogs }) => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">From the Blog</h2>
            <p className="text-slate-400">Thoughts on agents, distributed systems, and the future of AI.</p>
          </div>
          <a 
            href="https://medium.com/@naylencedev" 
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors"
            aria-label="View all articles on Medium"
          >
            View all articles <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <a 
              key={index} 
              href={blog.link} 
              target="_blank" 
              rel="noreferrer" 
              className="block group h-full"
              aria-label={`Read article: ${blog.title}`}
            >
              <article className="bg-[#030c0c] border border-teal-900/30 p-6 rounded-xl h-full transition-all hover:border-teal-500/30 hover:bg-[#030c0c]/80 hover:-translate-y-1 flex flex-col">
                <div className="text-xs text-teal-500 font-medium mb-3">{blog.date}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.desc}
                </p>
                <div className="flex items-center text-sm text-slate-500 group-hover:text-teal-400 transition-colors">
                  Read Article <ExternalLink className="w-3 h-3 ml-2" aria-hidden="true" />
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

