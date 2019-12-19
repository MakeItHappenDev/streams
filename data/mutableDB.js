import {parse} from 'graph-object-notation'

const string = `{
  "authors":[
    {"id":1,"name":"Arthur","tweets":[@tweets.0@,@tweets.1@]},
    {"id":2,"name":"Armando", "tweets":[@tweets.2@]}
  ],
  "tweets":[
    {"id":1,"text":"Foo Bar", "author":@authors.0@},
    {"id":2,"text":"hello world", "author":@authors.0@},
    {"id":3, "text":"Test me out","author":@authors.1@}
  ]
}`

export default parse(string)