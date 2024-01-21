import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clrn91cs10vhw01upls86pkdp/master";

export const getCourseList = async(level) => {
    const query = gql`
    query CourseList {
        courses(where: {courselevel: `+level+`}) {
          id
          name
          tag
          time
          courselevel
          author
          price
          description {
            markdown
          }
          banner {
            url
          }
          chapters {
            id
            title
            chapterContent {
              heading
              description {
                text
              }
              output {
                markdown
              }
            }
          }
        }
      }
    `

    const result = await request(MASTER_URL , query);

    return result;
}
