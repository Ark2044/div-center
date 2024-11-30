// Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>
          Made with ❤️ by Div Centering Enthusiasts
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
