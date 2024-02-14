// import Aws from 'aws-sdk'
// const S3Uploader=()=>{
//     const config = {
//         bucketName:import.meta.env.AWS_BUCKET_NAME,
//         dirName:"user_profile",
//         region:import.meta.env.AWS_BUCKET_REGION,
//         accesskeyId:import.meta.env.AWS_ACCESS_KEY,
//         secretAccessKey:import.meta.env.AWS_SECRET_ACCESS_KEY_ID
//     }
//     const handleFileUpload = (event)=>
//     {
//         console.log(event.target.files[0]);
//         Aws.config.update({
//             accessKeyId:config.accessKeyId,
//             secretAccessKey:config.secretAccessKey,
//             region:config.region
//         })

//         const s3=new Aws.s3();

//         const reader=new FileReader();

//         reader.onload=()=>{
//              const fileBuffer=reader.result;
//              S3.upload({
//                 Bucket:config.bucketName,
//                 key:'${config.dirName}'
//                 Body:fileBuffer,
//                 ACL:'public-write-read',
//                 ContentType:'image/jpeg'
//              },{}==>{

//              })
//         }
//     }
//     return(
//         <div>
//             <input type="file" onChange={handleFileUpload}/>
//         </div>
//     )
// }
// export default S3Uploader
