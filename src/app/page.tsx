import Card from './components/Card';

export default function Home() {
    return (
        <div className="flex flex-col items-center space-y-8 p-10 bg-teal-100">
            {/* Tayyaba's Card */}
            <div className="bg-lime-200 h-auto w-72 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
                <Card
                    name="Tayyaba"
                    age={19}
                    rollNumber="00398852"
                    studentClass="Monday- 2 to 5"
                />
            </div>

            {/* Laiba's Card */}
            <div className="bg-amber-200 h-auto w-72 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
                <Card
                    name="Laiba"
                    age={18}
                    rollNumber="00398855"
                    studentClass="Tuesday- 9 to 12"
                />
            </div>

            {/* Hifza's Card */}
            <div className="bg-gray-400 h-auto w-72 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
                <Card
                    name="Hifza"
                    age={15}
                    rollNumber="00398859"
                    studentClass="Sunday- 7 to 10"
                />
            </div>
        </div>
    );
}
