'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { subjects } from "@/constants";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";


const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('subject') || '';
  const [subject, setSubject] = useState('');

  useEffect(() => {

    setTimeout(() => {
      let newUrl = '';
      if (subject === 'all') {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["subject"],
        });

        router.push(newUrl, { scroll: false });
      } else {
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "subject",
            value: subject,
          });
  
          router.push(newUrl, { scroll: false });
      }
    }, 1000);
  }, [subject, router, searchParams, pathname]);
  return (
    <div>
      <Select onValueChange={setSubject} value={subject}>
        <SelectTrigger className="input capitalize relative border border-black rounded-lg items-center flex gap-2 px-2 py-1">
          <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All subjects</SelectItem>
          {subjects.map((subject) => (
            <SelectItem key={subject} value={subject} className="capitalize">
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SubjectFilter