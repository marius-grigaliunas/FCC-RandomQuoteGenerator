import React from "react";

export default function QuoteField({quoteToRender}) {
  return (
    <div>
        <div id="text">
          {quoteToRender.quote}
        </div>
        <div id='author'>
          -{quoteToRender.author}
        </div>
    </div>
  )
}
