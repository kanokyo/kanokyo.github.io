import React from "react";
import Imgs from "./Imgs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { Separator } from "./ui/separator";

const Profile = () => {
  return (
    <div className="font-mono text-white">
      <Card className="bg-white/10 backdrop-blur-xl border-white/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-300 mb-4 flex justify-start items-center">
            <User className="mr-2" />
            プロフィール
          </CardTitle>
          <Separator />
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col sm:justify-end m-5 mt-0 space-y-10  mx-auto text-slate-300">
            {/* 名前 */}
            <div className="lg:flex justify-center items-center">
              <Imgs />
              <div className="space-y-10">
                <div className="flex flex-col space-y-1 sm:mx-0 ">
                  <span className="text-sm flex sm: lg:justify-end mx-auto lg:mx-0 sm:pr-4 ">
                    Kanou Kyohei
                  </span>
                  <span className="text-3xl flex lg:justify-end mx-auto lg:mx-0 sm:pr-4">
                    叶　京平
                  </span>
                </div>

                {/* 一言 */}
                <div className="text-sm w-full flex items-center justify-center lg:justify-end p-2 mx-auto lg:mx-0">
                  <span className="max-w-72">
                    情報系の大学で学んだ知識を活かし、モダンなWeb技術を使用したアプリケーション開発に取り組んでいます。
                    ユーザビリティとパフォーマンスの両立を重視し、継続的な学習により技術の向上に努めています。
                  </span>
                </div>
              </div>
            </div>

            {/* 好きなこと(趣味) */}
            <div className="flex flex-col text-sm sm:text-lg space-y-2">
              <div className="flex mx-auto justify-between border rounded-md p-2 w-4/5 max-w-96">
                <span>生年月日 :</span>
                <span>2003/06/04</span>
              </div>
              <div className="flex mx-auto justify-between border rounded-md p-2  w-4/5 max-w-96">
                <span>出身 :</span>
                <span>東京都国立市</span>
              </div>
              <div className="flex mx-auto justify-between border rounded-md p-2  w-4/5 max-w-96">
                <span>趣味 :</span> <span>旅行, 散歩</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
